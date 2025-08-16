"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CoursesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/courses"); 
  }, [router]);

  return null;
}
