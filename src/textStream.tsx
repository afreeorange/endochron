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
  const text = `
Okay. Um... so I woke up at, what time was it, like three. Three AM. Again. And I, before I even opened my eyes, I, I knew. You know? I just knew. It was that... that pull. That, um... that deep, kind of dragging, I don't even know how to, it's like somebody has their hands around your spine and they're just... squeezing. It's not sharp. It's worse than sharp. It's like a... it's a slow, mean, pressure, that doesn't peak, it doesn't break, it just... it's just there. It just sits there.
So I'm laying there. And I'm thinking, like... maybe if I don't move it won't, it won't know I'm up. Right? Like. That's, that's what this does to you. Makes you negotiate with your own... with your own body. Before the day even starts.
Um. So I get up, I go to the bathroom. I had to. My stomach is, I look like I'm five months. I'm not even kidding. I don't, I don't look in the mirror on days like this anymore. I just. I sat on the toilet and I just... breathed. And the cramping is coming in, it's coming in waves at this point. And I'm just sitting there going through everything I have to do today in my head. Like. Meeting at ten. My daughter, pickup at three. That, um, that report. That's due Friday. And I'm doing that, I call it endo math. I'm doing endo math. Like, okay, which of these can I do from the floor if I have to. Which ones I absolutely cannot miss. Which ones can I, can I push.
We all do that. Nobody teaches you that. You just, yeah, you learn.
So, um... I called my doctor. Last month. I told her, like, it's getting worse. And she, she goes, are you sure it's not stress? You seem like you have a lot going on.
Hm.
Yeah, I have a lot going on. I have this disease that's been living in my body for fifteen, fifteen years, and everybody keeps telling me it's normal, it's stress, it's just, it's just bad periods. I'm forty-four. I've been explaining my pain since I was nineteen years old.
I'm, I'm tired. Like. In a way that sleep doesn't fix. You know?
So by the afternoon I had taken, I took everything. I took everything I was supposed to take. Heating pad until my skin was pink. Ginger tea. I did the breathing, I did, you know, all of it. And I'm still at a six. Still. A six. And I have to go pick up my kid from school. So I'm driving over there, I'm gripping the wheel, and I walk in smiling, because, I mean. What else am I going to do.
And she runs up to me. And she hugs me. Right, right across my middle. And I just, I held it. I held my face. I said, hi honey, how was your day.
Because that's part of it too. That's... yeah. Learning how to hold your face.
...I'm going to stop for now.`;

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
