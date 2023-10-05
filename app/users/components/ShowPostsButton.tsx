'use client';

import { Post, User } from "@prisma/client";
import React from "react";

type ShowPostsButtonProps = {
  user: User & { posts: Post[] };
};

export function ShowPostsButton(props: ShowPostsButtonProps) {
  const [showModal, setShowModal] = React.useState(false);

  const table = props.user.posts.length === 0 ? (
    <span>Sem posts.</span>
  ) : (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Conteúdo</th>
        </tr>
      </thead>
      <tbody>
        {props.user.posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (<>
    <button
      className="px-2 py-1 bg-cyan-800 hover:bg-cyan-700 rounded"
      onClick={() => setShowModal(showModal ? false : true)}
    >
      Visualizar ({props.user.posts.length})
    </button>

    {showModal && table}
  </>);
}