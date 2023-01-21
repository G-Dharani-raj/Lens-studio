import React from "react";
import "./styles/PhoneTabFilterBar.css";
import { HiFilter } from "react-icons/hi";
import { BiBookmarkHeart, BiSortUp ,BiUpArrowCircle} from "react-icons/bi";
import { Button } from "@chakra-ui/react";
import {AiFillHeart} from "react-icons/ai"
import { useDisclosure } from "@chakra-ui/react";
import ProductFilter from "./ProductFilter";
import MobileFilterDrawer from "./MobileFilterDrawer";
import 'animate.css';

export default function PhoneTabFilterBar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <>
    <MobileFilterDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <ProductFilter/>
    </MobileFilterDrawer>
    <div className="filter_bar_mother_container animate__animated animate__slideInUp animate__delay-2s">
      <div className="fav_product_icon_cont">
        <Button>
        <AiFillHeart className="heart_icon" />
        </Button>
      </div>
      <div className="sort_icon_container">
        <Button>
        <BiSortUp />
        </Button>
        
      </div>
      <div className="filters_icon_container" onClick={onOpen} >
        <Button>
        <HiFilter />
        </Button>
      </div>
      <div className="goUp_icon_container">
        <Button>
       <BiUpArrowCircle/>
        </Button>
      </div>
    </div>
    </>
  );
}
