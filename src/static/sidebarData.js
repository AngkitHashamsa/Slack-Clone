import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
export const sideBardata = [
  {
    id: "threads",
    path: "threads",
    name: "threads",
    icon: <InsertCommentIcon />,
  },
  {
    id: "mentions",
    path: "mentions",
    name: "mentions & reactions",
    icon: <InboxIcon />,
  },
  {
    id: "savedItems",
    path: "save",
    name: "Saved Items",
    icon: <BookmarkBorderIcon />,
  },
  {
    id: "channelBrowser",
    path: "channel",
    name: "channel browser",
    icon: <InsertCommentIcon />,
  },
  {
    id: "peopleUserGroups",
    path: "people",
    name: "people & user group",
    icon: <PeopleAltIcon />,
  },
  {
    id: "AppsIcon",
    path: "AppsIcon",
    name: "Apps Icon",
    icon: <AppsIcon />,
  },
  {
    id: "fileBrowser",
    path: "fileBrowser",
    name: "fileBrowser",
    icon: <FileCopyIcon />,
  },
  {
    id: "showLess",
    path: "showLess",
    name: "show less",
    icon: <ExpandLessIcon />,
  },
];
