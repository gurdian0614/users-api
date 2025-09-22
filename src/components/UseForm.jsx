
const UseForm = ({ formData, setFormData, handleInputChange, handleSubmit, userToEdit, setUserToEdit, loading }) => {
    return(
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                {userToEdit ? 'Editar Usuario' : 'Añadir Nuevo Usuario'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required disabled={userToEdit} />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Contraseña</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required={!userToEdit} />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">URL del Avatar</label>
                    <input type="text" name="avatar" value={formData.avatar} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="flex justify-center">
                   <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors duration-300" disabled={loading}>{ loading ? 'Cargando...': (userToEdit ? 'Actualizar' : 'Guardar') }</button>
                   {
                    userToEdit && (
                        <button type="button" onClick={() => {
                            setUserToEdit(null);
                            setFormData({
                              name: "",
                              email: "",
                              avatar:
                                "https://placehold.co/600x400/004AAD/FFF?text=user+avatar",
                            });
                        }} className="w-full md:w-auto ml-4 px-6 py-3 bg-gray-400 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-500 transition-colors duration-300" >Cancelar</button>
                    )
                   }
                </div>
            </form>
        </div>
    );
}

export default UseForm;