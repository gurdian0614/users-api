import useUser from "../hooks/useUser";
import UseForm from "./UseForm";
import UserList from "./UserList";

const GestorUsuarios = () => {
    const {
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
    } = useUser();

    return (
        <div className="container mx-auto maw-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10 tracking-tight">
                Gestión de Usuarios
            </h1>

            <UseForm
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                userToEdit={userToEdit}
                setUserToEdit={setUserToEdit}
                loading={loading}
            />

            <UserList 
                users={users}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                loading={loading}
            />
        </div>
    );
}

export default GestorUsuarios;