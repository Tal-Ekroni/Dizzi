import { Results } from './pages/results.jsx'
import Questionnaire from './pages/questionnaire.jsx'

export default [
    {
        path: '/',
        component: Questionnaire
    },
    {
        path: '/results',
        component: Results,
    },
    {
        path: '/car/:carId',
    }
]