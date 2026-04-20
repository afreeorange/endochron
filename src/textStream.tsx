import { useEffect, useState } from "react";
import TypeIt, { type TypeItProps } from "typeit-react";

type TypeItCore = NonNullable<
  Parameters<NonNullable<TypeItProps["getAfterInit"]>>[0]
>;

const chunk = (text: string) => text.match(/\S+\s*/g) ?? [];

export async function streamText() {
  const days = (await import("./data/days")).default;
  const transcripts = Object.values(days).map((d) => d.transcript);
  const text = transcripts[Math.floor(Math.random() * transcripts.length)];

  const chunks = chunk(text);

  async function* generateStream() {
    for (const chunk of chunks) {
      const endsWithSentence = /[.!?]\s*$/.test(chunk);
      const delay = endsWithSentence
        ? 600 + Math.random() * 1200
        : Math.random() * 350;
      await new Promise((resolve) => setTimeout(resolve, delay));

      yield chunk;
    }
  }

  return {
    textStream: generateStream(),
  };
}

export function useAnimatedText() {
  const [instance, setInstance] = useState<TypeItCore | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!instance) return;

    instance.type(text, { instant: true }).flush();
  }, [text]);

  function clearText() {
    setText("");
    instance?.empty().flush();
  }

  const el = (
    <TypeIt
      options={{ cursor: false }}
      getAfterInit={(i) => {
        setInstance(i);

        return i;
      }}
    ></TypeIt>
  );

  return [el, setText, clearText] as const;
}
