import { componentRenderer, screen } from "@/helpers/tests/customRender";
import Home from "@/pages/index";

const setup = componentRenderer(Home);

describe(`<${Home.name}/>`, () => {
  beforeEach(() => setup());

  it("should render the home page", async () => {
    await expect(
      screen.findByText(
        /Fortune and glory, kid. Fortune and glory. intercepted event type/i
      )
    ).resolves.toBeVisible();
  });
});
