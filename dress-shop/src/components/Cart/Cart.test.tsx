import { render } from "@testing-library/react";
import { Table } from "@chakra-ui/react";

// Components
import Card from ".";

// Constants
import { HEADER_LIST } from "@/constants";

describe("Card component", () => {
  it("Should render Card snapshot correctly", () => {
    const card = render(
      <Table>
        <Card headerList={HEADER_LIST} onClickDelete={() => {}} />
      </Table>,
    );

    expect(card).toMatchSnapshot();
  });
});
