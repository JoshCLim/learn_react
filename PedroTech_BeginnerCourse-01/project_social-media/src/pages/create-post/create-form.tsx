import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { auth, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

function CreateForm() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title to your post."),
    description: yup.string().required("You must add content to your post."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");
  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <input type="text" placeholder="title" {...register("title")} />
      <p>{errors.title?.message}</p>
      <textarea placeholder="description" {...register("description")} />
      <p>{errors.description?.message}</p>
      <input type="submit" />
    </form>
  );
}

export { CreateForm };
