import { useEffect,useRef } from "react";

const SelectWrapper = (props) => {
    const { children, className, outSideClickFunc } = props;

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                outSideClickFunc(false);
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
      
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef} className={className}>
            {children}
        </div>    
    );
}

export default SelectWrapper;