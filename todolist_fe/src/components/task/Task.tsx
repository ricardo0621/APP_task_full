import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Fab,
    Box,
    Paper,
    Divider
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CommentIcon from '@mui/icons-material/Comment';

// Datos de ejemplo - reemplaza esto con tus propios datos
const tasksExample = [
    { id: 1, title: 'Tarea de ejemplo 1', description: 'Esta es una descripción de ejemplo' },
    { id: 2, title: 'Tarea de ejemplo 2', description: 'Otra descripción de ejemplo' }
];

export default function Task() {
    // Aquí puedes agregar tus propias funciones
    const handleEdit = (id: number) => {
        console.log('Editar tarea:', id);
        // Tu lógica aquí
    };

    const handleDelete = (id: number) => {
        console.log('Eliminar tarea:', id);
        // Tu lógica aquí
    };

    const handleComment = (id: number) => {
        console.log('Comentar tarea:', id);
        // Tu lógica aquí
    };

    const handleAddTask = () => {
        console.log('Agregar nueva tarea');
        // Tu lógica aquí
    };

    const handleLogout = () => {
        console.log('Cerrar sesión');
        // Tu lógica aquí
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography color="primary" variant="h4" component="h1">
                    Mis Tareas
                </Typography>
                <IconButton color="error" aria-label="cerrar sesión" onClick={handleLogout}>
                    <LogoutIcon />
                </IconButton>
            </Box>

            {/* Lista de tareas */}
            <Paper elevation={3}>
                <List>
                    {tasksExample.map((task, index) => (
                        <Box key={task.id}>
                            <ListItem 
                                secondaryAction={
                                    <Box>
                                        <IconButton
                                            edge="end"
                                            aria-label="comentar"
                                            onClick={() => handleComment(task.id)}
                                            sx={{ mr: 1 }}
                                        >
                                            <CommentIcon />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            aria-label="editar"
                                            onClick={() => handleEdit(task.id)}
                                            sx={{ mr: 1 }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            aria-label="eliminar"
                                            onClick={() => handleDelete(task.id)}
                                            color="error"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                }
                            >
                                <ListItemText
                                    primary={task.title}
                                    secondary={task.description || 'Sin descripción'}
                                />
                            </ListItem>
                            {index < tasksExample.length - 1 && <Divider />}
                        </Box>
                    ))}
                </List>
            </Paper>

            {/* Botón flotante para agregar tarea */}
            <Fab
                color="primary"
                aria-label="agregar"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                onClick={handleAddTask}
            >
                <AddIcon />
            </Fab>
        </Container>
    )
}
