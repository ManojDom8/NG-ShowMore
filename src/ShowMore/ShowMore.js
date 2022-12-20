import React, { Component } from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Button from '@material-ui/core/Button';
import 'fontsource-open-sans';
import './ShowMore.css';
import { styled } from '@mui/material/styles';

export default function ShowMore(props) {
  var data = props.documentdata;
  var displaydatacount = props.displaydatacount;
  var extra = 0;
  var displaydata1 = [];
  var displayinToast = [];
  var displaydata = '';
  var extradata = '';
  var showmore = props.showmoreflag;
  var attributes = props.attributes;
  let keyValuePair = {
    ColumnName: '',
    IsPrimary: '',
  };

  if (showmore === 'Table') {
    for (let i = 0; i < data.length; i++) {
      if (i < displaydatacount) {
        displaydata1.push(data[i]);
      } else {
        extra++;
        if (i + 1 === data.length) {
          extradata += data[i];
        } else {
          extradata += data[i] + ', ';
        }
        displayinToast.push(data[i]);
      }
    }
    if (attributes === 'text') {
      const listItems = displaydata1.map((number) => (
        <span className="keywords"> {number}</span>
      ));

      return (
        <div>
          <div className="Status_Message_style">
            {listItems}
            {extra > 0 ? (
              <label role="tooltip" className="show_more">
                +{extra} more
              </label>
            ) : null}
          </div>
        </div>
      );
    } else if ((attributes = 'character')) {
      const listItems = displaydata1.map((number) => (
        <button type="button" alt="number" className="character">
          {' '}
          {number}
        </button>
      ));
      return (
        <div>
          <div className=" Status_Message_style">
            {listItems}
            {extra > 0 ? (
              <label className="show_more">+{extra}more</label>
            ) : null}
          </div>
        </div>
      );
    }
    if (attributes === "keyword") {
      const listItems = displaydata1.map((number) => <button  type="button" alt="number" className="keywords" > {number}</button >);
      return (
          <div >
              <div className="Status_Message_style">
                  <text className="attribute-margin"> Keywords : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
                  {listItems}
                  {
                      (extra > 0) ?
                          <Tooltip title={extradata}>
                              <Button role="tooltip" className="show_more">+{extra}more</Button>
                          </Tooltip> : null
                  }
              </div>
          </div>
      );
  }
  }
}
/**************************Input Data*****************************/
/*
 *  let file = ["Data-1", "Data-2", "Data-3","Data-4"];
 *
 * Case-1 <ShowMore  documentdata={file} displaydatacount="3" />
 * Case-2 <ShowMore documentdata={keywords[0]} displaydatacount="4" showmoreflag="Table" />
 * Case-3 <ShowMore documentdata={keywords[0]} displaydatacount="4" showmoreflag="Table" attributes="keyword"/>
 * Case-4 <ShowMore documentdata={keywords[0]} displaydatacount="4" showmoreflag="Table" attributes="5"/>
 */
