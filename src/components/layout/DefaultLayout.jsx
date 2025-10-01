import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../../public/logo.png";
import { Tooltip } from "@mui/material";
import { ProfileAvatarMenu } from "../Avatar/ProfileAvatarMenu";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RealEstateAgentIcon from "@mui/icons-material/RealEstateAgent";
import HandymanIcon from "@mui/icons-material/Handyman";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Transactions from "../../pages/Transactions/Transactions";

const drawerWidth = 255;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function DefaultLayout() {
  const location = useLocation();
  // const isActive = location.pathname === ele.path;

  const acticeTabStyle = {
    // backgroundColor: "#2D60FF",
    color: "#2D60FF",
  };

  const acticeIconStyle = {
    color: "#2D60FF",
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navSectionOne = [
    { title: "Dashboard", path: "/dashboard", icon: <HomeIcon /> },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: <CurrencyExchangeIcon />,
    },
    {
      title: "Accounts",
      path: "/accounts",
      icon: <PeopleAltIcon />,
    },
    {
      title: "Investments",
      path: "/investments",
      icon: <SsidChartIcon />,
    },
    {
      title: "Credit Cards",
      path: "/credit-cards",
      icon: <CreditCardIcon />,
    },
    {
      title: "Loans",
      path: "/loans",
      icon: <RealEstateAgentIcon />,
    },
    {
      title: "Services",
      path: "/services",
      icon: <HandymanIcon />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <SettingsSuggestIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          boxShadow: "none",
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon sx={{ color: "#343C6A" }} />
            </IconButton>
            <Typography
              fontWeight={600}
              variant="h6"
              noWrap
              component="div"
              color="#343C6A"
            >
              Overview
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <ProfileAvatarMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              paddingLeft: 1,
            }}
          >
            {open && (
              <img
                style={{ transition: "ease" }}
                src={logo}
                alt=""
                width={"80%"}
              />
            )}
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List>
          {navSectionOne.map((ele, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={ele.path}
                sx={[
                  {
                    minHeight: 48,
                    margin: "0 10px",
                    borderRadius: "7px",
                    // backgroundColor:
                    //   ele.path === location.pathname ? "#5d87ff" : "",
                    px: 2.5,
                    borderLeft:
                      ele.path === location.pathname
                        ? "4px solid #5d87ff !important"
                        : "",
                    border:
                      ele.path === location.pathname ? "1px solid #ccc" : "",
                  },
                  ele.path === location.pathname ? acticeTabStyle : null,
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    ele.path === location.pathname ? acticeIconStyle : null,
                    open
                      ? {
                          mr: 2,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {open ? (
                    ele.icon
                  ) : (
                    <Tooltip title={ele.title} arrow placement="right">
                      {ele.icon}
                    </Tooltip>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={ele.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#F5F7FA",
          p: 3,
          overflow: "auto",
          height: "auto",
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari
          },
        }}
      >
        <DrawerHeader />
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
        <Typography
          variant="p"
          fontSize={12}
          mt={4}
          textAlign={"center"}
          color="#ccc"
          noWrap
          component="div"
        >
          Copyright © 2025 Bank Dash. All Rights Reserved. <br />
          Developed by Abhishek Garad
        </Typography>
      </Box>
    </Box>
  );
}
