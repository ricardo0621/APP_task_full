import React from 'react'
import { Container, Typography, List, ListItem, ListItemText, IconButton, Fab, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


export default function Task() {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, mb: 2 }}>
          <Typography color="primary.main" variant="h4" component="h1">
            Todo List
          </Typography>
          <IconButton color="primary" aria-label="logout">
            <LogoutIcon />
          </IconButton>
        </Box>
        <List>
          <ListItem
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText sx={{ color: "primary.main" }} primary="Tarea" secondary="Fecha" />
          </ListItem>
          <ListItem
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText sx={{ color: "primary.main", sm: { color: "#f00" }, md: { color: "#0f0" } }} primary="Tarea2" secondary="Fecha" />
          </ListItem>
        </List>
        <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <AddIcon />
        </Fab>
      </Container>
    </>
  )
}