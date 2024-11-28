
import { getCollection } from "astro:content";
import {Clients, db, Posts} from "astro:db";

// https://astro.build/db/seed
export default async function seed() {

  await db.insert(Clients).values([
    {id: 1, name: "John", age: 30, isActive: true},
    {id: 2, name: "Jane", age: 25, isActive: false},
    {id: 3, name: "Bob", age: 45, isActive: true},
    {id: 4, name: "Jane", age: 25, isActive: false},
    {id: 5, name: "John", age: 30, isActive: true},
  ]);

  const posts = await getCollection("blog");
  await db.insert(Posts).values(
      posts.map((p) => ({
      id: p.id,
      title: p.data.title,
      likes: Math.round(Math.random() * 100),
    })),
    );


  console.log("Seed executed");
}
