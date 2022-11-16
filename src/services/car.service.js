import { storageService } from "./async-storage.service.js";

export const carService = {
  query,
  getById,
  save,
  remove,
  getEmptyCar,
  getEmptySubModel,
  saveMultiCars,
};

const key = "cars";

async function query(carFilterBy) {
  let cars = await storageService.query(key);
  const {
    carTypes,
    threeImportantFeaturs,
    importantAccessories,
    gearboxType,
    isFullPayment,
    minPrice,
    maxPrice,
  } = carFilterBy;

  if (carTypes.length) {
    cars = cars.filter(({ category }) => {
      return carTypes.includes(category);
    });
  }
  if (minPrice && maxPrice) {
    cars = cars.filter(({ price }) => {
      return minPrice <= +price && +price <= maxPrice;
    });
  }

  if (threeImportantFeaturs.length) {
    if (threeImportantFeaturs.includes("ביצועים")) {
      cars = cars.filter(({ zeroToHundred }) => {
        return zeroToHundred < 9;
      });
    }
    if (threeImportantFeaturs.includes("בטיחות")) {
      cars = cars.filter(({ safetr }) => {
        return safetr > 4;
      });
    }
    if (threeImportantFeaturs.includes("חיסכון בדלק")) {
      cars = cars.filter(({ gasUsageAvg, gasType }) => {
        return (
          gasType === "היברידי נטען" ||
          gasType === "חשמלי" ||
          gasType === "היברידי" ||
          gasUsageAvg <= 7
        );
      });
    }
  }
  if (importantAccessories.length) {
    if (importantAccessories.includes("מערכת מולטימדיה")) {
      cars = cars.filter(({ hasMultimediaSystem }) => {
        return hasMultimediaSystem;
      });
    }
    if (importantAccessories.includes("גלגלי מגנזיום")) {
      cars = cars.filter(({ wheelCovers }) => {
        return wheelCovers && wheelCovers !== "X";
      });
    }
    if (importantAccessories.includes("CAR PLAY")) {
      cars = cars.filter(({ hasCarplay }) => {
        return hasCarplay;
      });
    }
    if (importantAccessories.includes("גג פנרומי נפתח")) {
      cars = cars.filter(({ hasSunRoof }) => {
        return hasSunRoof;
      });
    }
    if (importantAccessories.includes("ריפודי עור")) {
      cars = cars.filter(({ lining }) => {
        return lining === "עור";
      });
    }
    // if (importantAccessories.includes("לוח מחוונים דיגטלי")) {
    //   cars = cars.filter(({ lining }) => {
    //     return lining === "עור";
    //   });
    // }
    if (importantAccessories.includes("כניסה והנעה ללא מפתח")) {
      cars = cars.filter(({ hasKeyLessStart }) => {
        return hasKeyLessStart;
      });
    }
    if (importantAccessories.includes("בלם יד חשמלי")) {
      cars = cars.filter(({ hasElectricHandBreaks }) => {
        return hasElectricHandBreaks;
      });
    }
  }
  if (gearboxType === "Manual") {
    cars = cars.filter(({ isManual }) => {
      return isManual;
    });
  } else if (gearboxType === "Auto") {
    cars = cars.filter(({ isManual }) => {
      return !isManual;
    });
  }
  const assembledCars = assembleCars(cars);
  return { cars, assembledCars };
}

function assembleCars(cars) {
  const res = {};
  cars.map((car) => {
    if (res[car.model]) res[car.model].push(car);
    else res[car.model] = [car];
  });
  return res;
}

function getById(carId) {
  return storageService.get(key, carId);
}
function remove(carId) {
  return storageService.remove(key, carId);
}
function save(car) {
  if (car._id) {
    return storageService.put(key, car);
  } else {
    return storageService.post(key, car);
  }
}

async function saveMultiCars(cars) {
  storageService.postMany(key, cars);
}

function getEmptyCar() {
  return {
    manufacturer: "",
    model: "",
    year: "2022",
    category: "",
    price: 0,
    subModels: [getEmptySubModel()],
  };
}

function getEmptySubModel() {
  return {
    name: "תת דגם חדש",
    safety: 1,
    motorType: "",
    volume: 0,
    horsePower: 0,
    momentum: 0,
    isAutoGear: true,
    breakesSystem: "",
    breakesFront: "",
    breakesBack: "",
    suspensionsFront: "",
    suspensionsBack: "",
    height: 0,
    width: 0,
    trunk: 0,
    clearance: 0,
    features: {
      isMagnezioumWheels: false,
      isPanoramicRoof: false,
      isMultimediaSystem: false,
      isCarPlay: false,
      isLeatherCovers: false,
      isDigitalClocks: false,
      isStartButton: false,
      isElectricHandBreaks: false,
    },
  };
}
