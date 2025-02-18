import AppBar from './components/layout/AppBar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Layout from './components/layout/Layout'
import SearchLayout from './components/SearchLayout'
import IconByName from './components/IconByName'
import Widget from './components/Widget'
import Collapsible from './components/Collapsible'
import Menu, { SubMenu } from './components/Menu'
import initializeI18n from './services/i18n'
import AppShell from './components/AppShell'
import ProgressBar from './components/ProgressBar'
import Tab from './components/Tab'
import Loading from './components/Loading'
import FilterButton from './components/FilterButton'
import * as userRegistryService from './services/userRegistryService'
import * as classRegistryService from './services/classRegistryService'
import * as attendanceRegistryService from './services/attendanceRegistryService'
import * as studentRegistryService from './services/studentRegistryService'
import * as worksheetRegistryService from './services/worksheetRegistryService'
import * as questionRegistryService from './services/questionRegistryService'
import * as likeRegistryService from './services/likeRegistryService'
import * as commentRegistryService from './services/commentRegistryService'
import * as assessmentRegistryService from './services/assessmentRegistryService'
import * as templateRegistryService from './services/templateRegistryService'
import * as notificationRegistryService from './services/notificationRegistryService'
import * as roleRegistryService from './services/roleRegistryService'
import { getApiConfig } from './services/configApiRegistryService'
import {
  getAllForUser,
  sendReadReceipt
} from './services/firebaseHistoryRegistryService'
import AppRoutesContainer from './components/AppRoutesContainer'
export {
  AppBar,
  Header,
  Footer,
  Layout,
  SearchLayout,
  IconByName,
  FilterButton,
  Widget,
  Collapsible,
  Menu,
  SubMenu,
  initializeI18n,
  AppShell,
  AppRoutesContainer,
  ProgressBar,
  Tab,
  Loading,
  userRegistryService,
  classRegistryService,
  attendanceRegistryService,
  studentRegistryService,
  worksheetRegistryService,
  questionRegistryService,
  likeRegistryService,
  commentRegistryService,
  assessmentRegistryService,
  getApiConfig,
  getAllForUser,
  sendReadReceipt,
  templateRegistryService,
  notificationRegistryService,
  roleRegistryService
}

export * from './services/Auth'
export * from './services/RestClient'
export * from './services/EventBus'
export * from './components/helper'
export * from './services/Telemetry'
export * from './components/calender'
export * from './components/layout/HeaderTags/index'
export * from './components/firebase/firebase'
