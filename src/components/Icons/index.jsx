import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ListIcon from '@material-ui/icons/List';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChatIcon from '@material-ui/icons/Chat';
import SmsIcon from '@material-ui/icons/Sms';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SyncIcon from '@material-ui/icons/Sync';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  whatsappIcon: {
    color: '#25D366'
  }
}));

const Icons = () => {
  const classes = useStyles();
  return (
    <div>
      <LocationOnIcon color="primary" />
      <ListIcon color="primary" />
      <ChatIcon color="primary" />
      <ShoppingCartIcon color="primary" />
      <HelpIcon color="primary" />
      <SearchIcon color="primary" />
      <DateRangeIcon color="primary" />
      <AddCircleOutlineIcon color="primary" />
      <SettingsIcon color="primary" />
      <SmsIcon color="primary" />
      <CheckIcon color="primary" />
      <CheckCircleOutlineIcon color="primary" />
      <AddIcon color="primary" />
      <HomeIcon color="primary" />
      <EmailIcon color="primary" />
      <HighlightOffIcon color="primary" />
      <WatchLaterIcon color="primary" />
      <CheckCircleIcon color="primary" />
      <AccountCircleIcon color="primary" />
      <InfoIcon color="primary" />
      <CreditCardIcon color="primary" />
      <SyncIcon color="primary" />
      <DeleteIcon color="primary" />
      <SaveAltIcon color="primary" />
      <ArchiveIcon color="primary" />
      <EditIcon color="primary" />
      <ArrowForwardIosIcon color="primary" />
      <WhatsAppIcon className={classes.whatsappIcon} />
      <AccountBalanceWalletIcon color="primary" />
      <EventSeatIcon color="primary" />
    </div>
  );
};

export default Icons;
