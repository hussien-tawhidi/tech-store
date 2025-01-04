import { addToCart } from "@/store/slice/cartSlice";
import { IconType } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { RootState } from "@/store/store";

interface AddToCartButtonProps {
  _id: string;
  name: string;
  price: number;
  title: string;
  Icon: IconType;
  image: { url: string; _id: string }[];
  color: { name: string; hex: string }[];
  discountPrice: number;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  _id,
  title,
  Icon,
  name,
  type,
  variant,
  image,
  color,
  price,
  discountPrice,
  className,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const existItem = cartItem.find((item) => item._id === _id);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id,
        name,
        price,
        quantity: 1,
        image,
        color,
        discountPrice,
      })
    );
  };

  return (
    <div className={existItem ? "hidden" : "block"}>
      {color.length === 0 && (
        <p className='text-[12px] text-slate-600 animate-in animate__animated'>
          Please select your color first
        </p>
      )}
      <Button
        disabled={color.length === 0}
        variant={variant}
        type={type}
        className='px-6 py-3 bg-slate-600 text-white rounded-md animate-in animate__animated hover:bg-slate-700'
        onClick={handleAddToCart}>
        {title && title} {Icon && <Icon />}
      </Button>
    </div>
  );
};

export default AddToCartButton;
