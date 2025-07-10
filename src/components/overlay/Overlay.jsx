import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Привет, я Rabotyaga1155
          </h1>
          <p className="text-gray-500">Это моё мини-портфолио</p>
          <p className="mt-3">Я умею:</p>
          <ul className="leading-9">
            <li>Программировать</li>
            <li>Учиться и учить</li>
            <li>Доводить дело до конца</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">Вот мои навыки</h1>
          <p className="text-gray-500">Пишу фуллстэк</p>
          <p className="mt-3">
            <b>Фронтенд</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>Next.js</li>
            <li>React Native</li>

            <li>TailwindCSS</li>
          </ul>
          <p className="mt-3">
            <b>Бэкенд</b>
          </p>
          <ul className="leading-9">
            <li>C#</li>
            <li>ASP.NET</li>
            <li>EntityFramework</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Можно написать мне на почту
          </h1>
          <p className="text-gray-500">GitHub: Rabotyaga1155F</p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            <a href="mailto:cool.poryadin2017@gmail.com">
              cool.poryadin2017@gmail.com
            </a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
