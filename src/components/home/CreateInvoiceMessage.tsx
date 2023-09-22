import {
  Wrapper,
  Image,
  Heading,
  Body,
} from "./styles/CreateInvoiceMessage.styles";
import IconEmpty from "../../assets/illustration-empty.svg";

const CreateInvoiceMessage = () => {
  return (
    <Wrapper>
      <Image src={IconEmpty} alt="" />
      <Heading>There is nothing here.</Heading>
      <Body>
        Create an invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </Body>
    </Wrapper>
  );
};

export default CreateInvoiceMessage;
