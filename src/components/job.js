import React from "react";
import { FormattedDate, FormattedNumber, useIntl,FormattedMessage } from 'react-intl';

const Job = (props) => {
  const intl = useIntl();
  const español = intl.locale.startsWith("es");
  const salario = props.offer.salary;

  const millionLabel = español
    ? salario === 1
      ? "millón"
      : "millones"
    : "million";

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
    <td>
  <FormattedMessage id={props.offer.name} />
</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumber value={salario} minimumFractionDigits={1} />{" "}
        {millionLabel}
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;
