
const UserList = ({ users, handleEdit, handleDelete, loading}) => {
    return(
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Lista de Usuarios
            </h2>
            { loading && <div className="text-center text-gray-500 mb-4">Cargando usuarios...</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    users.map(user => (
                        <div key={user.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl trnasition-shadow duration-300">
                            <img src={user.avatar || 'https://placehold.co/600x400/E5E7EB/4B5563?text=Sin+Imagen'} alt={user.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
                            <p className="text-sm text-gray-600 mb-4">{user.email}</p>
                            <div className="flex justify-end space-x-2">
                                <button onClick={() => handleEdit(user)} className="px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-300">Editar</button>
                                <button onClick={() => handleDelete(user.id)} className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-300">Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UserList;