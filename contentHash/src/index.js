import _ from 'lodash';
import $ from 'jquery';
import './style.scss';

const ele = $('<div>');
ele.html(_.join(['hello', 'world'], '__'));
$('body').append(ele);
