export default function FormComponent() {
    return (
        <>
            <Text label="Nom d'utilisateur" id="username" name="username" format="/[a-zA-Z]{3,}/" />
            <Password label="Mot de passe" id= "password" name= "password" format="/*{6,}/" />
        </>
    );
}