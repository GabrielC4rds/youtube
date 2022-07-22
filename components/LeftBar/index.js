import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TopBar from "./../TopBar/index";
import { useStyles } from "../../pages/HomePage";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import HistoryIcon from "@mui/icons-material/History";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import TheatersIcon from "@mui/icons-material/Theaters";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SensorsIcon from "@mui/icons-material/Sensors";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Typography } from '@mui/material';
import { Grid } from "@mui/material";
import Image from 'next/image';
const drawerWidth = 240;

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

export default function ClippedDrawer() {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar></TopBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Início"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Explorar"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SlowMotionVideoIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Shorts"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Inscrições"}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Biblioteca"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Hístorico"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SlideshowIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Seus vídeos"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Assistir mais tarde"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ContentCutIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Seus clipes"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ThumbUpOffAltIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Vídeos marcados como gostei"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PlaylistAddIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Criar playlist"}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItemText
              classes={{ primary: classes.listItemTitle }}
              primary={"Explorar"}
            ></ListItemText>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TheatersIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Filmes"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Jogos"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SensorsIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Ao vivo"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Ideia"}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEventsIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary={"Esportes"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box p={8}>
        <Toolbar/>
        <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>
          <Grid container spacing={4}>
            {videos.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
      </Box>
    </Box>
  );
}
