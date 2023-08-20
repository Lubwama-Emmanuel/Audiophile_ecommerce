import HeadingSec from "../Headings/HeadingSec";
import styles from "./Features.module.scss";

const items = [
  {
    id: 1,
    value: "1x",
    name: "headphone unit",
  },
  {
    id: 2,
    value: "2x",
    name: "replacement earcups",
  },
  {
    id: 3,
    value: "1x",
    name: "user manual",
  },
  {
    id: 4,
    value: "1x",
    name: "3.5mm 5m audio cable",
  },
  {
    id: 5,
    value: "1x",
    name: "travel bag",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.features__con}>
        <HeadingSec>{"features"}</HeadingSec>
        <p>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat. <br></br> <br></br> The advanced Active Noise
          Cancellation with built-in equalizer allow you to experience your
          audio world on your terms. It lets you enjoy your audio in peace, but
          quickly interact with your surroundings when you need to. Combined
          with Bluetooth 5. 0 compliant connectivity and 17 hour battery life,
          the XX99 Mark II headphones gives you superior sound, cutting-edge
          technology, and a modern design aesthetic.
        </p>
      </div>
      <div className={styles.features__box}>
        <HeadingSec>{"in the box"}</HeadingSec>
        <ul>
          {items.map((el) => (
            <Item element={el} key={el.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Item({ element }) {
  return (
    <li className={styles.list_value}>
      <span className={styles.span_value}>{element.value}</span> {element.name}
    </li>
  );
}
