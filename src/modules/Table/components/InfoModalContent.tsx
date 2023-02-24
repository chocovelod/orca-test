import { Download, DropDownIcon } from "@/icons";
import { Button } from "@/src/components/ui/Button";
import cn from "classnames";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DropDownMenu } from "./DropDownMenu";
interface Props {
  name: string;
  icon: string;
  additionalInfo: string;
  onClose: () => void;
}

const InfoModalContent: FC<Props> = ({
  name,
  icon,
  additionalInfo,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <StyledInfoModalContent>
      <div className="[ Modal__head ]">
        <Image src={icon} alt="alt" width={32} height={32} />
        <div className="[ Modal__headTitle ][ Font__24_18 ]">{name}</div>
      </div>

      <div className="[ Modal__content ]">
        <div className="[ Modal__additionalInfoContainer ]">
          <p className="[ Color_secondary ]">Additional info:</p>
          <p className="[ Modal__additionalInfo ]">{additionalInfo}</p>
        </div>
        <div className="[ Modal__buttonsContainer ]">
          <Button>Download</Button>
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            leftIcon={<Download />}
            rightIcon={
              <DropDownIcon className={cn({ Modal__dropDownIcon: isOpen })} />
            }
          >
            Download as
          </Button>
          <Button secondary onClick={onClose}>
            Cancel
          </Button>
          {isOpen && (
            <DropDownMenu>
              <li>test</li>
            </DropDownMenu>
          )}
        </div>
      </div>
    </StyledInfoModalContent>
  );
};

const StyledInfoModalContent = styled.div`
  width: 900px;
  background-color: #ffffff;

  .Modal__head {
    display: flex;
    align-items: center;
    padding: 24px;
    border-bottom: 1px solid #cacfdb;
  }

  .Modal__headTitle {
    margin-left: 12px;
  }

  .Modal__content {
    padding: 24px;
  }

  .Modal__additionalInfo {
    margin-top: 8px;
    word-wrap: break-word;
  }

  .Modal__buttonsContainer {
    display: flex;
    place-content: flex-end;
    margin-top: 16px;

    button:not(:first-child) {
      margin-left: 16px;
    }
  }

  .Modal__dropDownIcon {
    transform: rotate(180deg);
  }
`;

export { InfoModalContent };
