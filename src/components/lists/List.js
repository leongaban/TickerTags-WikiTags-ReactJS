import React from "react";
import Chip from "../common/Chip";
import Categories from "./Categories";
import { isEmpty } from "ramda";

const create = () => console.log("create list");

const EmptyBlock = ({ category }) => (
  <div className="row">
    <div className="col-md-12 pb15">
      <Chip icon={category} name={category} />
    </div>
    <div className="col-md-12 pb15">
      <div className="well">
        <p className="lead text-center">You have not yet created any lists.</p>
        <p className="text-center">
          <a onClick={create}><i className="fa fa-plus-circle" /> New List</a>
        </p>
      </div>
    </div>
  </div>
);
export default function List({ category, cards }) {
  return (
    <div className="container">
      {isEmpty(cards)
        ? <EmptyBlock category={category} />
        : <Categories category={category} cards={cards} />}
    </div>
  );
}
