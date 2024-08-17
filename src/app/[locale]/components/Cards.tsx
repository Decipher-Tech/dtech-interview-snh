"use client";
import { useEffect, useState } from 'react';
import Card from './Card';
import { useLocale } from 'next-intl';
import { localizeDict } from '../localize_dict';

const Cards = (data: any) => {
  const [posts, setPosts] = useState<{ title: string; body: string }[]>([]);
  const locale = useLocale();
  const isEnglish = locale === 'en';

  // useEffect(() => {
  //   fetch('https://dummyjson.com/posts')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.posts && data.posts.length > 0) {
  //         const firstTenPosts = data.posts.slice(0, 10);
  //         setPosts(firstTenPosts);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching posts:', error));
  // }, []);

  useEffect(() => {
    if(locale === 'en'){
      setPosts(data.data);
    }
    else{
      setPosts(localizeDict(data.data, locale));
    }
  }, [data, locale]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      {posts && posts.map((post:any, index: number) => (
        <Card key={index} title={post.title} description={post.body} />
      ))}
    </div>
  );
};

export default Cards;
