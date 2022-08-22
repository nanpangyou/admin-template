import { FunctionalComponent } from "vue";
import s from "./foo.module.scss";
export const Foo: FunctionalComponent = () => <div class={s.wrapper}>Foo11</div>;
Foo.displayName = "Foo";
