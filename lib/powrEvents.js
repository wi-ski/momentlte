function PowrEvents(){
    this._events = {};

    this.on = function(event,callback){
        if(event in this._events){
            this._events[event].push(callback);
        }else{
            this._events[event] = [callback];
        }
        return this;
    };

    this.trigger = function(event){
        if(event in this._events){
            this._events[event].forEach(function(callback){
                callback(this);
            }.bind(this));
        }else{
            console.warn( "Unregistered event [ " + event + " ] called. For POWr Module: [ " + this.moduleName + " ]");
        }
        return this;
    };

    this.triggerFor = function(event,modifier){ //<- This modifier thing might be a memory leak cuz the we can always reference something later? -WD
        var resp = function(arg){
            if(modifier) modifier.call(this,event,arg);
            this.trigger(event);
        }.bind(this);

        return resp;
    };
};