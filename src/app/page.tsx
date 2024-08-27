import Header from "@/components/Header";
import ViewPost from "@/components/ViewPost";
import { PostProvider } from "@/contexts/PostContext";

export default function Home() {
  return (
      <div>    
        <PostProvider>
          <Header/>
          <div className="p-4">
            <ViewPost/>
          </div>
        </PostProvider>
      </div>
  );
}
