import { getUsers } from "@/services/users";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: getUsers,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return data.users.map((user: any) => <p key={user.name}>Nome: {user.name} </p>);
}
