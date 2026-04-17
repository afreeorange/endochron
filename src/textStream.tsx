import { useEffect, useState } from "react";
import TypeIt, { type TypeItProps } from "typeit-react";

type TypeItCore = NonNullable<
  Parameters<NonNullable<TypeItProps["getAfterInit"]>>[0]
>;

const chunk = (text: string, chunkSize = 3) => {
  const chunks: string[] = [];

  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.slice(i, i + chunkSize));
  }

  return chunks;
};

export async function streamText() {
  const text = `Woke up at 3am again. Before I even opened my eyes, I already knew — that pull, that deep dragging ache low in my belly, wrapping around my back like somebody had their hands around my spine and was just squeezing. Not sharp. Worse than sharp. Like a slow, mean pressure that doesn't peak, doesn't break, just sits there. I lay still for a minute thinking maybe if I don't move it won't know I'm awake. That's what it does to you. Makes you negotiate with your own body before the day even starts. Got up to use the bathroom — had to. Bloating so bad my stomach looked like I was five months along. I've learned not to look in the mirror on these days. I sat on the toilet and just breathed through it, the cramping coming in waves now, and I thought about everything I had to do today. The meeting at 10. My daughter's pickup at 3. The report due by end of week. And I started doing that math — that endo math — figuring out which of those things I could do from the floor if I needed to, which ones I absolutely could not miss, which ones I could maybe push. We all do that math. Nobody teaches it to you. You just learn it. Called my doctor last month. Told her the pain was escalating. She said, "Are you sure it's not stress? You seem like you have a lot going on." I have a lot going on. Like this disease that has been living in my body for fifteen years while people kept telling me it was normal, it was stress, it was just bad periods. I'm forty-four years old and I have been explaining my pain since I was nineteen. I am tired in a way that sleep doesn't fix. By afternoon I had taken everything I was supposed to take, used the heating pad until my skin was pink, drunk the ginger tea, done the breathing. And I was still at a six. Still. A six. And I had to go pick up my child from school, so I drove there gripping the wheel, walked in smiling, because what else are you going to do — and she ran up to me and hugged me right across my middle and I held it. I held my face. I said hi baby, how was your day. Because that's also part of it. Learning how to hold your face.`;

  const chunks = chunk(text);

  async function* generateStream() {
    for (const chunk of chunks) {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 200));

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
