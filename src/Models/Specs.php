<?php
/*
 * QCOREApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

namespace QCOREApiLib\Models;

use JsonSerializable;

/**
 * @todo Write general description for this model
 */
class Specs implements JsonSerializable
{
    /**
     * @todo Write general description for this property
     * @required
     * @var integer $disk public property
     */
    public $disk;

    /**
     * @todo Write general description for this property
     * @required
     * @var integer $memory public property
     */
    public $memory;

    /**
     * @todo Write general description for this property
     * @required
     * @var integer $vcpus public property
     */
    public $vcpus;

    /**
     * @todo Write general description for this property
     * @required
     * @var integer $gpus public property
     */
    public $gpus;

    /**
     * @todo Write general description for this property
     * @required
     * @var integer $transfer public property
     */
    public $transfer;

    /**
     * Constructor to set initial or default values of member properties
     * @param integer $disk     Initialization value for $this->disk
     * @param integer $memory   Initialization value for $this->memory
     * @param integer $vcpus    Initialization value for $this->vcpus
     * @param integer $gpus     Initialization value for $this->gpus
     * @param integer $transfer Initialization value for $this->transfer
     */
    public function __construct()
    {
        if (5 == func_num_args()) {
            $this->disk     = func_get_arg(0);
            $this->memory   = func_get_arg(1);
            $this->vcpus    = func_get_arg(2);
            $this->gpus     = func_get_arg(3);
            $this->transfer = func_get_arg(4);
        }
    }


    /**
     * Encode this object to JSON
     */
    public function jsonSerialize()
    {
        $json = array();
        $json['disk']     = $this->disk;
        $json['memory']   = $this->memory;
        $json['vcpus']    = $this->vcpus;
        $json['gpus']     = $this->gpus;
        $json['transfer'] = $this->transfer;

        return $json;
    }
}
