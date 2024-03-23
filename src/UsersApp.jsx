import { CreateUser } from "./components/CreateUser";
import { EditUser } from "./components/EditUser";
import { ListUsers } from "./components/ListUsers";
import { ShowUser } from "./components/ShowUser";
import { UserProvider } from "./context/UserProvider";

export const UsersApp = () => {
  return (
    <UserProvider>
      <div className="container py-5">
        <h1 className="mb-4 text-center">Prueba Técnica Servilex</h1>
        <CreateUser />
        <EditUser />
        <ListUsers />
        <ShowUser />
      </div>
    </UserProvider>
  );
};
