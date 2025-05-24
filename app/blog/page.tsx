import { posts } from "#site/content";
import Link from "next/link";
import { sortPosts } from "@/lib/utils";

export default async function Page() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div>
      {sortedPosts?.length > 0 ? (
        <ul>
          {sortedPosts.map((post) => {
            const { title, slug } = post;
            return (
              <li key={slug}>
                <Link href={slug}>
                {title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  );
}
