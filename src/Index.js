import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";

const Index = () => {
    return (
        <StrictMode>
            <App />
        </StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);
