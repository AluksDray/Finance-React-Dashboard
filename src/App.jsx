import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import RootLayOut from './HomePageRootLayout.jsx' 
import Expenses from './Main Segment/Expenses folder/Expenses.jsx'
import Settings from './Main Segment/Settings Folder/Settings.jsx'
import IncomeLayout from './Main Segment/Income Folder/IncomeLayout.jsx'
import FiatIncome from './Main Segment/Income Folder/FiatIncome.jsx'
import CryptoIncome from './Main Segment/Income Folder/CryptoIncome.jsx'
import TotalIncome from './Main Segment/Income Folder/TotalIncome.jsx'
import { cryptoloader, loader, totalloader } from './Main Segment/Income Folder/Income segment components/IncomeDetailsComp.jsx'
import SmsLayout from './Main Segment/sms folder/SmsAlertLayout.jsx'
import ArchivedSms from './Main Segment/sms folder/ArchivedSms.jsx'
import ReadSms from './Main Segment/sms folder/ReadSms.jsx'
import UnreadSms from './Main Segment/sms folder/UnreadSms.jsx'
import AllSms, { smsLoader } from './Main Segment/sms folder/AllSms.jsx'
import InvestmentLayout from './Main Segment/investment folder/investmentLayout.jsx'
import FiatInvestment from './Main Segment/investment folder/FiatInvestment.jsx'
import CryptoInvestment from './Main Segment/investment folder/CryptoInvestment.jsx'
import TotalInvestment from './Main Segment/investment folder/TotalInvestment.jsx'
import ExpensesLayout from './Main Segment/Expenses folder/ExpensesLayout.jsx'
import FiatExpenses from './Main Segment/Expenses folder/FiatExpenses.jsx'
import CryptoExpenses from './Main Segment/Expenses folder/CryptoExpenses.jsx'
import TotalExpenses from './Main Segment/Expenses folder/TotalExpenses.jsx'
import SettingsLayout from './Main Segment/Settings Folder/SettingsLayout.jsx'
import ProfileSettings from './Main Segment/Settings Folder/ProfileSettings.jsx'
import NotificationSettings from './Main Segment/Settings Folder/NotificationSettings.jsx'
import PasswordSettings from './Main Segment/Settings Folder/PasswordSettings.jsx'


function App() {
  
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayOut />}>

        <Route path='/' element={<IncomeLayout />} >
          <Route path='FiatIncome' index element={<FiatIncome />} loader={loader}/>
          <Route path='CryptoIncome' element={<CryptoIncome />} loader={cryptoloader}/>
          <Route path='TotalIncome' element={<TotalIncome />} loader={totalloader}/>
        </Route>

        <Route path='/' element={<SmsLayout />}>
          <Route path='ArchivedSms' element={<ArchivedSms />}/>
          <Route path='ReadSms' element={<ReadSms />} loader={smsLoader}/>
          <Route path='UnreadSms' element={<UnreadSms />} loader={smsLoader}/>
          <Route path='AllSms' index element={<AllSms />}  loader={smsLoader}/>
        </Route>

        <Route path='/' element={<InvestmentLayout />}>
          <Route path='fiatInvestment' index element={<FiatInvestment />} loader={loader}/>
          <Route path='cryptoInvestment' element={<CryptoInvestment />} loader={cryptoloader}/>
          <Route path='totalInvestment' element={<TotalInvestment />} loader={totalloader}/>
        </Route>

        <Route path='/' element={<ExpensesLayout />}>
          <Route path='fiatExpenses' index element={<FiatExpenses />} loader={loader}/>
          <Route path='cryptoExpenses' element={<CryptoExpenses />} loader={cryptoloader}/>
          <Route path='totalExpenses' element={<TotalExpenses />} loader={totalloader}/>
        </Route>

        <Route path='/' element={<SettingsLayout />}>
          <Route path='profile' index element={<ProfileSettings />}/>
          <Route path='notification' element={<NotificationSettings />}/>
          <Route path='password' element={<PasswordSettings />}/>
        </Route>
        
    </Route>
  ))

  return (
    <RouterProvider router={route}/>
  )
}

export default App
