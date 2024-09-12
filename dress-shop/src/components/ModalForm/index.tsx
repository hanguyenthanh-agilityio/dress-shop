import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Types
import { Product } from "@/types";

// Components

import { SimpleGrid } from "@chakra-ui/react";
import FormInput from "../InputForm";
import Modal from "../Modal";

interface FormModalProps {
  modalTitle: string;
  buttonLabel: string;
  isLoading?: boolean;
  productItem?: Product;
  onClose: () => void;
  onConfirm: (data: Product) => void;
  defaultValue?: string;
}

const FormModal = memo<FormModalProps>(
  ({
    modalTitle,
    buttonLabel,
    onClose,
    onConfirm,
    productItem,
    isLoading,
    defaultValue,
  }: FormModalProps) => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm<Product>({
      defaultValues: productItem,
    });

    const onSubmit: SubmitHandler<Product> = (data) => onConfirm(data);

    return (
      <Modal
        modalTitle={modalTitle}
        buttonAction={buttonLabel}
        ButtonClose="Cancel"
        isLoading={isLoading}
        isOpen={true}
        onClick={handleSubmit(onSubmit)}
        onClose={onClose}
        data-testid="modal"
      >
        <form>
          <SimpleGrid w="100%" columns={1}>
            {/* Name */}
            <FormInput
              label="Name"
              isInvalid={!!errors.name}
              inputName="name"
              type="text"
              placeholder="Product Name"
              register={register}
            />
            {/* Image */}
            <FormInput
              label="ImageURL"
              isInvalid={!!errors.imageURL}
              inputName="imageURL"
              type="text"
              placeholder="Product ImageURL"
              register={register}
            />
            {/* Categories */}
            <FormInput
              label="Category"
              inputName="category"
              type="text"
              placeholder="Product Category"
              defaultValue={defaultValue}
              isInvalid={!!errors.category}
              register={register}
            />
            {/* Description */}
            <FormInput
              label="Description"
              inputName="description"
              type="text"
              placeholder="Product Description"
              isInvalid={!!errors.description}
              register={register}
            />
            {/* Price */}
            <FormInput
              type="number"
              label="Price"
              inputName="price"
              placeholder="Product Price"
              isInvalid={!!errors.price}
              register={register}
            />
          </SimpleGrid>
        </form>
      </Modal>
    );
  },
);

export default FormModal;
