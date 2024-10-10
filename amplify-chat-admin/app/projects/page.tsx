"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@aws-amplify/ui-react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useUser } from "./UserContext";

export default function Page() {

  const { dispatch } = useUser();
  useEffect(() => {
    dispatch({ type: "SETPROJECT", payload: { projectName: "List of Projects" } })
  }, [])

  const projects = [
    {
      title: 'QChat',
      description: 'White-labeled Chatbots powered by Amazon Bedrock and Kendra!',
      content: 'Create and share chatbot link with customers to evaluate for a weak. The chatbot crawls customer site and indexes the content including PDFs.',
      footer: <Link href="/projects/qchat" >Link <ArrowRightCircleIcon className="w-6" /></Link>
    }
  ]

  return (
    <main>
      <div className="flex gap-6">
        {projects?.map(item => {
          return (
            <Card key={item.title} className="w-96 bg-blue-50">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="hidden md:block">
                <p>{item.content}</p>
              </CardContent>
              <CardFooter>
                <p>{item.footer}</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </main>
  );
}
