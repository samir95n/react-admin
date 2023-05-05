import {Layout, LayoutProps, AppBar, AppBarProps} from "react-admin";
import CustomAppBar from "../customAppBar";

export const CustomLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={CustomAppBar} sidebar={MySidebar} />
);
export default CustomLayout;

export const MySidebar = () => {
  return null;
};
