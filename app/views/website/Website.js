'use strict';
import React from 'react';
import Header from './Header/Header';

class Website extends React.Component {
  static entryPoint() { return 'website'; }
  render() {
    require('./Website.css');

    let page;
    if (this.props.children) {
      page = this.props.children;
    } else {
      page = (
        <section className='websiteSection'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sem elit, varius vitae laoreet eu, congue id eros. Etiam efficitur viverra consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id augue libero. Praesent et sapien nec mi pellentesque molestie. Donec id leo et metus dapibus vulputate. Nulla facilisi. Ut luctus dictum eros et dictum. Nullam ullamcorper condimentum est quis molestie. Nunc turpis metus, placerat sit amet egestas sit amet, elementum non tortor. Nam non arcu a tortor euismod accumsan. Etiam elementum vel lacus at gravida. Vivamus iaculis feugiat orci ac sodales. Duis imperdiet libero libero, quis maximus nibh lacinia at. Pellentesque pellentesque molestie ornare. Fusce lacinia elementum odio, eu dictum nunc vehicula sit amet.</p>
          <p>Integer at consequat leo. Ut dui lectus, consequat sagittis congue non, viverra at mi. Sed vitae euismod lacus. Etiam aliquam vitae nunc vel cursus. Suspendisse sed dolor vulputate, porttitor dui at, consectetur urna. Curabitur eget tortor et urna facilisis tempus vel eget ex. Aliquam purus risus, iaculis vel enim sed, gravida lacinia libero. Ut sit amet dui vel mi consequat tempus vel ac nisl.</p>
          <p>Nam accumsan urna at dictum facilisis. Morbi elementum in quam quis blandit. Phasellus sit amet risus lobortis, ultricies purus mollis, bibendum ante. In cursus et nunc ultricies eleifend. Phasellus feugiat varius dolor ac pharetra. Sed porttitor id diam ac ultricies. Morbi in dui et odio laoreet tincidunt non quis magna. Cras id erat metus.</p>
          <p>Duis convallis vitae lorem nec mattis. Vivamus efficitur blandit justo. Maecenas eget turpis eu sem aliquam tristique. Sed quis purus vulputate, fringilla erat in, ornare elit. Etiam at pretium ipsum. Suspendisse nec leo in neque egestas iaculis nec quis nisi. Cras luctus arcu vel lobortis fermentum. Proin vel purus tortor. Fusce lobortis laoreet dui, a aliquam turpis dignissim sed. Ut pulvinar blandit neque, ac pellentesque neque scelerisque nec.</p>
          <p>Etiam iaculis ultricies est, et dignissim nibh vulputate blandit. Maecenas vehicula sed libero eget egestas. Cras vitae auctor nisl. Nunc tincidunt porta purus vitae tempus. Duis sit amet turpis eget mi egestas sagittis. Vivamus scelerisque non lorem auctor dapibus. Donec dignissim quam non sem tincidunt consectetur. Proin sed metus euismod, iaculis magna nec, facilisis dui. Curabitur sed risus sit amet diam faucibus mattis. Donec dictum ligula libero, et aliquet nisl pretium a. Sed feugiat pretium commodo.</p>
        </section>
      );
    }
    return (
      <div>
        <Header />
        {page}
      </div>
    );
  }
}

export default Website;
