import * as React from 'react';
import ButtonCell from '@c3/sdl-react/reactComponents/gridCell/ButtonCell';
import '@c3/ui/UiSdlTableActionsCustomCell.scss'

/**
 * Renders a UiSdlTableActionsCustomCell with React.
 * @param props A UiSdlTableActionsCustomCell configuration
 */
const UiSdlTableActionsCustomCellReact: React.FunctionComponent<Props> = (props: Props) => {
  const event_code = props.dataItem.obj.event_code;

 
  if (event_code.includes("SYSTEM_OVERLOAD") || event_code.includes("UNPLANNED_MAINTENANCE"))
 {
    return (
      <div className="flex customCellHighlight">
        <ButtonCell {...props}>
          <span className="c3-icon c3-icon-exclamation" />
          <div className="textIconPadding">
            <span className="eventCodeBoxSystemOverload">{event_code}</span>
          </div>
        </ButtonCell>
      </div>
    );
  } else if (event_code.includes("DIAGNOSTICS_COMPLETE"))  {
    return (
      <div className="flex customCellHighlight2">
        <ButtonCell {...props}>
          <span className="c3-icon c3-icon-check" />
          <div className="textIconPadding">
            <span className="eventCodeBoxDiagnostics">{event_code}</span>
          </div>
        </ButtonCell>
      </div>
    );
  } else if (event_code.includes("SYSTEM_REBOOT"))  {
    return (
      <div className="flex customCellHighlight3">
        <ButtonCell {...props}>
          <span className="c3-icon c3-icon-warning" />
          <div className="textIconPadding">
            <span className="eventCodeBoxSystemReboot">{event_code}</span>
          </div>
        </ButtonCell>
      </div>
    );
  }  
  else {
    return (
      <ButtonCell {...props}>
        {event_code}
      </ButtonCell>
    );
  }

};

export default UiSdlTableActionsCustomCellReact;