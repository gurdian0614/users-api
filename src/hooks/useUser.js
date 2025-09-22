import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useUser = () => {
    const [users, setUsers] = useState([]);
    const [userToEdit, setUserToEdit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        avatar: 'https://placehold.co/600x400/004AAD/FFF?text=user+avatar'
    });
    const API_URL = 'https://api.escuelajs.co/api/v1/users';

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data);
        } catch (err) {
            errorAlert('No se puedieron cargar los usuarios. Por favor, intente de nuevo más tarde.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const successAlert = (mensaje) => {
        Swal.fire({
            title: mensaje,
            icon: 'success'
        });
    }

    const errorAlert = (mensaje) => {
        Swal.fire({
            title: mensaje,
            icon: 'error'
        });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (userToEdit) {
                console.log(`${API_URL}/${userToEdit.id}`);
                console.log({
                    name: formData.name,
                    avatar: formData.avatar
                });
                await axios.put(`${API_URL}/${userToEdit.id}`, {
                    name: formData.name,
                    avatar: formData.avatar
                });
            } else {
                await axios.post(API_URL, {
                    ...formData,
                    role: 'customer'
                });
            }

            setFormData({
                name: '',
                email: '',
                avatar: 'https://placehold.co/600x400/004AAD/FFF?text=user+avatar'
            });
            setUserToEdit(null);
            fetchUsers();
        } catch(err) {
            errorAlert('Error al guardar el usuario. Verifique los datos.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    //Funcion solamente de ejemplo ya que no hay una API para eliminar un usuario
    const handleDelete = async (id) => {
        setLoading(true);
        try {
            await Swal.fire({
                title: 'Estás seguro?',
                text: '¡No hay vuelta atrás!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`${API_URL}/${id}`);
                    fetchUsers();
                    successAlert('Usuario eliminado correctamente.');
                }
            });
        } catch (err) {
            errorAlert('Error al eliminar un usuario.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    const handleEdit = (user) => {
        setUserToEdit(user);
        setFormData({
            name: user.name,
            email: user.email,
            password: '',
            avatar: user.avatar
        });
    }

    return {
        users,
        userToEdit,
        setUserToEdit,
        loading,
        formData,
        setFormData,
        handleInputChange,
        handleSubmit,
        handleDelete,
        handleEdit
    }
}

export default useUser;