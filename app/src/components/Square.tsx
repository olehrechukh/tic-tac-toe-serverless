import "./Square.css";
import { motion } from "framer-motion";

interface ResultProps {
    clsName: string,
    onClick: Function;
}

export const Square: React.FC<ResultProps> = ({ clsName, onClick }) => {
    const handleClick = () => {
        onClick();
    };

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="square"
            onClick={handleClick}
        >
            {clsName && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={clsName.toLowerCase()}
                ></motion.span>
            )}
        </motion.div>
    );
};
