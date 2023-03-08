import { motion, AnimatePresence } from "framer-motion";
import { Square } from './Square'

interface WinnerPopupProps {
    winner: string,
    reset: React.MouseEventHandler<HTMLButtonElement>;
}

export const WinnerPopup: React.FC<WinnerPopupProps> = ({ winner, reset }) => {
    return (
        <AnimatePresence>
            {
                <motion.div
                    key={"parent-box"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="winner"
                >
                    <motion.div
                        key={"child-box"}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text"
                    >
                        <motion.h2
                            initial={{ scale: 0, y: 100 }}
                            animate={{
                                scale: 1,
                                y: 0,
                                transition: {
                                    y: { delay: 0.7 },
                                    duration: 0.7,
                                },
                            }}
                        >
                            {winner === "x | o"
                                ? "No Winner :/"
                                : "Win !! :)"}
                        </motion.h2>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: {
                                    delay: 1.3,
                                    duration: 0.2,
                                },
                            }}
                            className="win"
                        >
                            {winner === "x | o" ? (
                                <>
                                    <Square clsName="x" onClick={() => { }} />
                                    <Square clsName="o" onClick={() => { }} />

                                </>
                            ) : (
                                <>
                                    <Square clsName={winner} onClick={() => { }} />
                                </>
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { delay: 1.5, duration: 0.3 },
                            }}
                        >
                            <button className="button" onClick={reset} > Restart </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};
