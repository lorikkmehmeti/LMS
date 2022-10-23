import "./App.css.ts";
import { sprinkles } from "./styles/utilities/utility-styles.css";
import Button from "./components/Button/Button";
import ThemeProvider from "./providers/theme-provider";
import Text from "./components/global/Text/Text";
import Avatar from "./components/Avatar/Avatar";
import { IMAGES } from "./utils/constants";

export default function App() {
  // const [count, setCount] = useState(0);
  return (
    <ThemeProvider>
      <div
        className={`App ${sprinkles({
          fontFamily: "body",
        })}`}
      >
        <div
          className={sprinkles({
            padding: {
              desktop: 6,
              computer: 5,
              tablet: 3,
              mobile: 1,
            },
          })}
        >
          <Button size="small" color="ghost">
            Cancel
          </Button>
          <Button size="small" color="secondary">
            Save the draft
          </Button>
          <Button size="small" color="primary">
            Confirm stake
          </Button>
          <Text key={1} as="h1">
            Heading Texts
          </Text>
          <div style={{ display: "flex", gap: 10 }}>
            <Avatar name="Lorik Mehmeti" image={IMAGES[23]} size={13} />
            <Avatar
              name="Eni Salihu"
              image={"https://static.zerochan.net/Denji.full.3249822.jpg"}
              size={11}
            />
            <Avatar name="Valmir Haxholli" size={9} />
            <Avatar name="Tame Impala" size={9} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
