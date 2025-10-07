import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { messages: updatedMessages },
      });

      if (error) throw error;

      if (data.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <h1 className="text-xl font-semibold">ChatGPT Clone</h1>
        </div>
      </header>
      
      <ScrollArea className="flex-1">
        <div className="mx-auto max-w-4xl">
          {messages.length === 0 ? (
            <div className="flex h-[calc(100vh-200px)] items-center justify-center">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">How can I help you today?</h2>
                <p className="text-muted-foreground">
                  Start a conversation by typing a message below
                </p>
              </div>
            </div>
          ) : (
            <div className="divide-y">
              {messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
              ))}
              {isLoading && (
                <div className="flex gap-4 p-6 bg-muted/50 animate-pulse">
                  <div className="h-8 w-8 rounded-lg bg-primary/20" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-20 bg-muted-foreground/20 rounded" />
                    <div className="h-4 w-full bg-muted-foreground/20 rounded" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </ScrollArea>

      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default Chat;
